import React, { FC, memo } from 'react';
import FormatListGroupSvg from '../svg/format-list-group.svg';

export interface IFormatListGroupIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatListGroupIcon: FC<IFormatListGroupIconProps> = memo(props => {
  return <FormatListGroupSvg {...props} />;
});
