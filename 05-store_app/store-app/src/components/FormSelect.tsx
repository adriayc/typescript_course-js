import { SelectValue } from '@radix-ui/react-select';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger } from './ui/select';

type FormSelectProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  options: string[];
};

function FormSelect({ label, name, defaultValue, options }: FormSelectProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Select name={name} defaultValue={defaultValue || options[0]}>
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((item) => {
            return (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}

export default FormSelect;
