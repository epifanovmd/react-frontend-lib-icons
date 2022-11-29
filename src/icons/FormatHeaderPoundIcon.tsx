import React, { FC, memo } from 'react';
import FormatHeaderPoundSvg from '../svg/format-header-pound.svg';

export interface IFormatHeaderPoundIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatHeaderPoundIcon: FC<IFormatHeaderPoundIconProps> = memo(props => {
  return <FormatHeaderPoundSvg {...props} />;
});
