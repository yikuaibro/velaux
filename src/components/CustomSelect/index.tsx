import type { SelectProps } from '@alifd/meet-react/lib/select';
import { Select } from '@b-design/ui';
import * as React from 'react';
import locale from '../../utils/locale';

interface CustomSelectProps extends SelectProps {
  enableInput?: boolean;
  dataSource: { label?: string; value: any }[];
}

export const CustomSelect = (props: CustomSelectProps) => {
  const [inputValue, setInputValue] = React.useState('');
  const dataSource = [...props.dataSource];
  if (inputValue != '') {
    dataSource.unshift({ label: inputValue, value: inputValue });
    console.log(dataSource, props.dataSource);
  }
  return (
    <Select
      {...props}
      locale={locale().Select}
      showSearch={true}
      onSearch={(value) => {
        if (props.enableInput) {
          setInputValue(value);
        }
        if (props.onSearch) {
          props.onSearch(value);
        }
      }}
      dataSource={dataSource}
    >
      {props.children}
    </Select>
  );
};
