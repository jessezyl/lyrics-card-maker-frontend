import { useState, useEffect, useRef } from "react";
import CardStyleContext from "@contexts/CardStyleContext";

import routes from "@/js/api/routes";
import _ from "lodash";
import DomToImage from "dom-to-image";

import iconDownload from "@assets/icon-download.svg";

import {
  formatLyrics,
  getLang,
  bestContrast,
  getContrast,
  downloadBlob,
} from "./utils";

import Searchbar from "@components/searchbar/Searchbar";
import SongPreview from "@components/SongPreview";
import LyricsViewer from "@components/LyricsViewer";
import LyricsCard from "@components/lyrics-card/LyricsCard";
import SizeMenu from "@utils/SizeMenu";
import PageLogo from "@utils/PageLogo";
import OptionsPanel from "./components/OptionsPanel";
import LyricsModal from "./components/LyricsModal";
import Button from "@controls/Button";

const defaultLyricsData = {
  lang: "",
  lyrics: [],
  selectionCompleted: false,
  status: 0,
};

function App() {
  const [song, setSong] = useState({});
  const [colors, setColors] = useState(null);
  const [cardAspectRatio, setCardAspectRatio] = useState("1:1");
  const [cardStyling, setCardStyling] = useState({
    bold: false,
    italic: false,
    alignment: "left",
    highlightColor: "#ffffff",
    textColor: "#000000",
    bannerBackground: "#f7f16c",
    bannerForeground: "#000000",
  });
  const [downloading, setDownloading] = useState(false);

  const cardRef = useRef(null);

  // Setting a proper foreground color for the background color
  useEffect(() => {
    setCardStyling((prev) => {
      return {
        ...prev,
        bannerForeground: bestContrast(prev.bannerBackground, [
          "#000000",
          "#ffffff",
        ]),
        textColor: bestContrast(prev.highlightColor, ["#000000", "#ffffff"]),
      };
    });
  }, [cardStyling.bannerBackground, cardStyling.highlightColor]);

  const [lyricsData, setLyricsData] = useState(defaultLyricsData);

  const { id, image } = song;

  // Whenever a song is selected, fetch lyrics and colors
  useEffect(() => {
    if (_.isEqual(song, {})) return;

    setLyricsData(defaultLyricsData);
    setColors(null);

    // lyrics
    routes
      .getLyrics(id)
      .then((res) => {
        const lang = getLang(res.data);
        setLyricsData({
          lang: lang,
          lyrics: formatLyrics(res.data)
            .split("\n")
            .map((l) => [l, 0]),
          selectionCompleted: false,
          status: 1,
        });
      })
      .catch(() => {
        setLyricsData({
          ...defaultLyricsData,
          status: -1,
        });
      });

    //colors
    routes
      .getColors(image)
      .then((res) => {
        let { background_color, text_color } = res.data;

        if (getContrast(background_color, text_color, true) <= 2)
          text_color = bestContrast(background_color, ["#000000", "#ffffff"]);

        setColors({
          background_color: background_color,
          text_color: text_color,
        });
      })
      .catch(() => {
        console.error("Couldn't extract colors from image");
      });
  }, [song]);

  const handleResultSelected = (newSong) => {
    if (song == newSong) return;

    setSong(newSong);
  };

  const handleSelectionChanged = (index) => {
    setLyricsData((prev) => {
      const newLyrics = prev.lyrics.map((l, i) => {
        if (i == index) return [l[0], l[1] == 0 ? 1 : 0];
        return l;
      });

      const selectedCount = newLyrics.filter((l) => l[1] == 1).length;

      return {
        ...prev,
        lyrics: newLyrics,
        selectionCompleted: selectedCount == 4,
      };
    });
  };

  const downloadHandler = () => {
    if (cardRef.current == null) return;

    setDownloading(true);

    const scale = 3;
    DomToImage.toBlob(cardRef.current, {
      width: cardRef.current.offsetWidth * scale,
      height: cardRef.current.offsetHeight * scale,
      style: {
        transform: "scale(3)",
        transformOrigin: "top left",
      },
    }).then((blob) => {
      downloadBlob(blob, "lyrics-card.png");
      setDownloading(false);
    });
  };

  return (
    <div
      className={`${
        downloading && "downloading "
      } relative container max-w-[1920px] max-h-[1080px] mx-auto flex h-[100vh]`}
    >
      <LyricsModal
        song={song}
        colors={colors}
        lyricsData={lyricsData}
        onLyricsSelectionChanged={handleSelectionChanged}
      />

      <aside className="hidden lg:grid grid-rows-[5rem_1fr] p-5 gap-7 h-full bg-[#272838]">
        <PageLogo className="h-[70%] self-center" />
        <SizeMenu
          className="flex items-center flex-col gap-4"
          cardClassName="aspect-square rounded-lg w-[85px] px-2"
          onSizeChanged={setCardAspectRatio}
        />
      </aside>

      <main className="grow grid grid-rows-[5rem_1fr] grid-cols-[1fr] lg:grid-cols-[1fr_36ch] p-5 gap-5">
        <header className="relative lg:col-span-2 flex gap-4 sm:gap-8 items-center">
          <PageLogo
            className="block lg:hidden h-[60%] sm:h-[70%] self-center"
            geniusColor="#272838"
          />
          <Searchbar
            className="grow"
            onResultSelected={(id) => handleResultSelected(id)}
          />
        </header>

        <section className="row-start-2 relative">
          <CardStyleContext.Provider value={{ cardStyling, setCardStyling }}>
            <OptionsPanel className="rounded-md mb-4 border border-gray-400 bg-[#eeeeee]" />
            <SizeMenu
              className="lg:hidden flex items-center justify-center xs:justify-start gap-4 mb-4 px-2"
              cardClassName="aspect-square rounded-xl w-[65px]"
              showLabel={false}
              onSizeChanged={setCardAspectRatio}
            />
            <LyricsCard
              ref={cardRef}
              cardInfo={song}
              lyricsData={lyricsData}
              aspectRatio={cardAspectRatio}
            />
          </CardStyleContext.Provider>

          <Button
            text="Download card"
            icon={iconDownload}
            onClick={downloadHandler}
            disabled={false}
            loading={downloading}
          />
        </section>

        <aside className="row-start-2 col-start-2 hidden lg:grid grid-rows-[120px_1fr] border border-gray-400 rounded-md overflow-auto">
          {!_.isEqual(song, {}) && (
            <SongPreview className="row-start-1" song={song} colors={colors} />
          )}

          <LyricsViewer
            className="grow"
            style={{
              gridRow: !_.isEqual(song, {}) ? "2/3" : "1/3",
            }}
            id={id}
            colors={colors}
            lyricsData={lyricsData}
            lineMax={36}
            onSelectionChanged={handleSelectionChanged}
          />
        </aside>
      </main>
    </div>
  );
}

export default App;
