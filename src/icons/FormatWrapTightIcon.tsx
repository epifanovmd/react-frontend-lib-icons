import React, { FC, memo } from 'react';
import FormatWrapTightSvg from '../svg/format-wrap-tight.svg';

export interface IFormatWrapTightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatWrapTightIcon: FC<IFormatWrapTightIconProps> = memo(props => {
  return <FormatWrapTightSvg {...props} />;
});
