interface TypeInput {
  type: "Input";
  name: string;
  placeholder?: string;
  description?: string;
  max?: number;
  maxMessage?: string;
  min?: number;
  minMessage?: string;
  defaultValue?: string
}

interface TypeSelect {
  type: "Select";
  name: string;
  options: string[];
  placeholder?: string;
  description?: string;
  defaultValue?: string
}

interface TypeSwitch {
  type: "Switch";
  name: string;
  description?: string;
  defaultValue?: boolean

}

type formType =
  | TypeInput
  | TypeSelect
  | TypeSwitch;

