import React, { FC, memo } from 'react';
import FormatHeader2Svg from '../svg/format-header-2.svg';

export interface IFormatHeader2IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatHeader2Icon: FC<IFormatHeader2IconProps> = memo(props => {
  return <FormatHeader2Svg {...props} />;
});
