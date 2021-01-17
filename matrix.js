class Matrix {
  constructor(...rows) {
    this.columns = [];
    rows.forEach((row) => {
      if (row.length !== rows[0].length) {
        throw "Malformed matrix";
      }
      row.forEach((element, rowIndex) => {
        this.columns[rowIndex] = [...(this.columns[rowIndex] || []), element];
      });
    });
    this.rows = rows;
  }

  checkSameDimensions(matrix) {
    if (matrix.rows.length != this.rows.length) {
      throw `Matrices have different length rows: ${matrix.rows}, ${this.rows}`;
    }
    if (matrix.columns.length != this.columns.length) {
      throw `Matrices have different length columns: ${matrix.columns}, ${this.columns}`;
    }
    return true;
  }

  checkRowColumnDimensions(matrix) {
    if (matrix.columns[0].length != this.rows[0].length) {
      throw `Matrices have different mismatched rows to columns: ${matrix.columns[0]}, ${this.rows[0]}`;
    }
    return true;
  }

  add(addendedMatrix) {
    this.checkSameDimensions(addendedMatrix);
    const summation = this.rows.map((row, rowIndex) => {
      const addenedRow = addendedMatrix.rows[rowIndex];
      return row.map((element, columnIndex) => {
        const addendedElement = addenedRow[columnIndex];
        return element + addendedElement;
      });
    });
    return new Matrix(...summation);
  }

  subtract(subtrahend) {
    this.checkSameDimensions(subtrahend);
    const subtraction = this.rows.map((row, rowIndex) => {
      const subtrahendRow = subtrahend.rows[rowIndex];
      return row.map((element, columnIndex) => {
        const subtrahendElement = subtrahendRow[columnIndex];
        return element - subtrahendElement;
      });
    });
    return new Matrix(...subtraction);
  }

  multiply(multiplier) {
    console.log(typeof multiplier);
    this.checkRowColumnDimensions(multiplier);
    // Needs the same number of columns as rows
    const multiplication = this.rows.map((row) =>
      multiplier.columns.map((column) =>
        column.reduce((acc, element, index) => {
          acc += element * row[index];
          return acc;
        }, 0)
      )
    );
    return new Matrix(...multiplication);
  }

  toString() {
    return this.rows
      .reduce((acc, row) => {
        return (acc += `\n${row.toString()}`);
      })
      .toString();
  }
}

module.exports = {
  Matrix: Matrix,
};

