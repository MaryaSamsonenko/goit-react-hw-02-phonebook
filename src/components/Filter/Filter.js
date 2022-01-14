import React, { Component } from "react";
import { SearchWrapper, Label, Input } from "../Filter/Filter.styled";

export class Filter extends Component {
  handleSearch = ({ target: { value } }) => {
    this.props.onChange(value);
  };
  render() {
    return (
      <SearchWrapper>
        <Label htmlFor="name">Find contacts by name </Label>
        <div>
          <Input type="text" name="name" onChange={this.handleSearch} />
        </div>
      </SearchWrapper>
    );
  }
}
