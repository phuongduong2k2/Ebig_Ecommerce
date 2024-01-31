interface RuleItemBool {
  value: boolean;
  message: string;
}

interface RuleItemValue {
  value: number | string;
  message: string;
}

interface Rules {
  required: RuleItemBool;
  min: RuleItemValue;
  max: RuleItemValue;
  minLength: RuleItemValue;
  maxLength: RuleItemValue;
}

export default interface AppTextInputProps {
  name: string;
  status?: 'disable' | 'default';
  label?: string;
  aboveLabel?: string;
  leftLabel?: string;
  alertColor?: string;
  rules?: Rules;
}
