import React, { FC, memo } from 'react';
import FormatListChecksSvg from '../svg/format-list-checks.svg';

export interface IFormatListChecksIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatListChecksIcon: FC<IFormatListChecksIconProps> = memo(props => {
  return <FormatListChecksSvg {...props} />;
});
