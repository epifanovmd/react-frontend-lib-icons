import React, { FC, memo } from 'react';
import FormatListCheckboxSvg from '../svg/format-list-checkbox.svg';

export interface IFormatListCheckboxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatListCheckboxIcon: FC<IFormatListCheckboxIconProps> = memo(props => {
  return <FormatListCheckboxSvg {...props} />;
});
