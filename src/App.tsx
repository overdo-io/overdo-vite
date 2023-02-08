import Navbar from './components/global/Navbar';
import Sidebar from './components/global/Sidebar';
import ListGrid from './components/list/ListGrid';
import { useBoard } from './contexts/board-context';
import { useGetBoards } from './api/board/useGetBoards';

function App() {
  const { selectedBoard, setSelectedBoard } = useBoard();

  const { data: boards, isLoading } = useGetBoards({
    onSuccess: (res) => {
      if (res.length === 0) return [];
      if (selectedBoard.id === '') {
        setSelectedBoard(() => {
          return res[0];
        });
      }
      return res;
    },
  });

  if (boards) {
    return (
      <div className="h-screen bg-slate-200">
        {/* Nav: Logo and User */}
        <Navbar />
        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="mt-12 grid grid-cols-[20em_auto]">
            {/* Sidebar */}
            <Sidebar boards={boards} />
            {/* Board lists */}
            {boards.length === 0 ? (
              <div>No boards!</div>
            ) : (
              selectedBoard.id !== '' && <ListGrid board={selectedBoard} />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
