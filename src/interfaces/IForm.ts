interface TypeInput {
  type: "Input";
  name: string;
  placeholder?: string;
  description?: string;
}

interface TypeSelect {
  type: "Select";
  name: string;
  options: string[];
  placeholder?: string;
  description?: string;
}

interface TypeSwitch {
  type: "Switch";
  name: string;
  description?: string;
}

type formType =
  | TypeInput
  | TypeSelect
  | TypeSwitch;

