import React, { FC, memo } from 'react';
import FormatPilcrowSvg from '../svg/format-pilcrow.svg';

export interface IFormatPilcrowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatPilcrowIcon: FC<IFormatPilcrowIconProps> = memo(props => {
  return <FormatPilcrowSvg {...props} />;
});
