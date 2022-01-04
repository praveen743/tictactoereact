import React,{useState} from 'react'

function TicTacToe() {
    const initial= ['','','','','','','','','']
    const [board, setBoard] = useState([...initial])
    const [player, setPlayer] = useState('x')
    
    const changePlayer = (index) =>{
        if(board[index] !== '') return;
        setBoard(board => {
         return board.map((val,i) =>{
        if(i === index) return player;
        return val;
      });
     })

     setPlayer(player === 'x' ? 'o' : 'x')
    }

    const resetBoard = () => {
        setBoard([...initial])
        setPlayer('x')
    }


    return (
        <div>
            <h3>Current Player is : <span className='player'>{player}</span></h3>
        <div className='board'>
            {
                board.map((box,i) => {
                    return <div className='board-tiles' onClick={() =>changePlayer(i)}>{box}</div>
                })
            }
        </div>
        <button className='btn' onClick={() => resetBoard()}>Reset Game</button>
        </div>
    )
}

export default TicTacToe