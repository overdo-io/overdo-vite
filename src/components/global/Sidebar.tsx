/* eslint-disable jsx-a11y/click-events-have-key-events */
import clsx from 'clsx';
import { useBoard } from '../../contexts/board-context';
import { useModal } from '../../contexts/modal-context';
import { IBoard } from '../../types/IBoard';
import ModalTypes from '../../types/ModalTypes';
import BoardMenu from '../buttons/BoardMenu';

type SidebarProps = { boards: IBoard[] };

function Sidebar({ boards }: SidebarProps) {
  const { selectedBoard, setSelectedBoard } = useBoard();
  const { setModal } = useModal();

  return (
    <div className="flex flex-col gap-12 px-20">
      {boards.map((board) => (
        <div
          key={board.id}
          className={clsx(
            'flex cursor-pointer justify-between rounded-lg bg-opacity-30 p-2 text-lg font-medium hover:outline hover:outline-2',
            board.id === selectedBoard.id
              ? `outline outline-2 outline-${board.color}-500`
              : `outline-slate-400`
          )}
          onClick={() => {
            setSelectedBoard({ id: board.id, color: board.color });
          }}
        >
          <div
            className={clsx(
              `text-${board.color}-500`,
              `hover:text-${board.color}-400`
            )}
          >
            {board.name}
          </div>
          {board.id === selectedBoard.id ? <BoardMenu /> : null}
        </div>
      ))}
      <div
        className="cursor-pointer text-lg font-medium text-slate-500 underline underline-offset-4 hover:text-slate-700"
        onClick={() => {
          setModal({ open: true, type: ModalTypes.CREATE_BOARD });
        }}
      >
        + New Board
      </div>
    </div>
  );
}

export default Sidebar;