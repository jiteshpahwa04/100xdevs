enum Direction {
    Up,   // 0
    Down, // 1
    Left, // 2
    Right // 3
}

function doSomething(keyPressed: Direction) {
	// do something.
}

doSomething(Direction.Left)
doSomething(Direction.Up)
console.log(Direction.Down)
console.log(Direction.Right)

// Common usecase in express
enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

// const app = express();

// app.get("/", (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })