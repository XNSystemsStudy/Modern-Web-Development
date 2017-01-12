(() => {
    enum Direction {
        Up = 1,
        Down,
        Left,
        Right
    }

    let a = [Direction.Up, Direction.Down, Direction.Left, Direction.Right];
})();

(() => {
    const enum Enum {
        A = 1,
        B = A * 2
    }

    let a = [Enum.A, Enum.B];
})();

(() => {
    let variables = "string";

    enum FileAccess {
        // constant members
        None,
        Read = 1 << 1,
        Write = 1 << 2,
        ReadWrite = Read | Write,
        // computed member
        G = variables.length,
    }

    let a = [FileAccess.None, FileAccess.Read, FileAccess.Write, FileAccess.G];

})();

(() => {
    enum Enum {
        A
    }
    let a = Enum.A;
    let nameOfA = Enum[Enum.A]; // "A"
})();

(() => {
    const enum Enum {
        A
    }
    let a = Enum.A;
    let nameOfA = Enum[Enum.A]; // "A"
})();

(() => {
    enum Enum {
        A = 1,
        B = 1
    }
    let a = [Enum.A, Enum.B];
    let nameOfA = Enum[Enum.A]; // "B"
    let nameOfB = Enum[Enum.B]; // "A"
})();

enum EnumD {
    A = 1,
    B,
    C = "123".length
}

declare enum Enum {
    A = 1,
    B,
    C = "123".length
}

// unassigned B ?: hover over B
let eD = [EnumD.A, EnumD.B, EnumD.C];
let e = [Enum.A, Enum.B, Enum.C];
