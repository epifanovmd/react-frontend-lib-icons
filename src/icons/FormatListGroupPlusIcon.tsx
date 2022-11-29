import React, { FC, memo } from 'react';
import FormatListGroupPlusSvg from '../svg/format-list-group-plus.svg';

export interface IFormatListGroupPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatListGroupPlusIcon: FC<IFormatListGroupPlusIconProps> = memo(props => {
  return <FormatListGroupPlusSvg {...props} />;
});
