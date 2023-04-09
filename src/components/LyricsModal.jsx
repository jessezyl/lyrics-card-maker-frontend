import React, { Fragment, useState } from "react";
import ModalSheet from "react-modal-sheet";
import SongPreview from "@components/SongPreview";
import LyricsViewer from "@components/LyricsViewer";
import _ from "lodash";

const LyricsModal = ({
  song = {},
  colors = {},
  lyricsData,
  onLyricsSelectionChanged,
}) => {
  const { id } = song;

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <Fragment>
      {!_.isEqual(song, {}) && (
        <button
          className="block lg:hidden fixed w-full xs:w-[80%] h-[70px] -translate-x-1/2 left-1/2 bottom-0 z-50 overflow-hidden xs:rounded-t-md bg-white xs:border xs:border-b-0 xs:border-gray-400 "
          onClick={handleOpen}
        >
          <SongPreview className="h-full text-sm" song={song} colors={colors} />
        </button>
      )}
      <ModalSheet
        className="w-full xs:w-[80%]"
        isOpen={isOpen}
        onClose={handleClose}
        snapPoints={[0.6]}
        style={{
          margin: "auto",
        }}
      >
        <ModalSheet.Container>
          <ModalSheet.Header pinned className="overflow-hidden xs:rounded-t-md">
            <SongPreview className="h-[120px]" song={song} colors={colors} />
          </ModalSheet.Header>
          <ModalSheet.Content>
            <LyricsViewer
              className="h-full "
              id={id}
              colors={colors}
              lyricsData={lyricsData}
              lineMax={80}
              onSelectionChanged={onLyricsSelectionChanged}
            />
          </ModalSheet.Content>
        </ModalSheet.Container>
        <ModalSheet.Backdrop
          className="focus:outline-none focus-within:outline-none"
          onClick={handleClose}
        />
      </ModalSheet>
    </Fragment>
  );
};

export default LyricsModal;