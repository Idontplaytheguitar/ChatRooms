interface StringOption {
  value: 'string';
  name: string;
  restrictions: stringRestrictions;
}

interface stringRestrictions {
  min?: number;
  max?: number;
  messageMin: string;
  messageMax: string;
}

interface BooleanOption {
  value: 'boolean';
  name: string;
}

interface EnumOption {
  value: 'string[]';
  enum: string[];
  name: string;
}

export type ZodSchemaCreate =
  | StringOption
  | EnumOption
  | BooleanOption;
