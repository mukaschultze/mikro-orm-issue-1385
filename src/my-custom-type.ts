import { Type } from "@mikro-orm/core";

export class CustomType extends Type<number, string> {
  convertToDatabaseValue(value: number | string | undefined): string {
    return `${value}`;
  }

  convertToJSValue(value: number | string | undefined): number {
    return +(value ?? 0);
  }

  getColumnType() {
    return `float`;
  }
}
