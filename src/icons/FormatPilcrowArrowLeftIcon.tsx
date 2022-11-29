import React, { FC, memo } from 'react';
import FormatPilcrowArrowLeftSvg from '../svg/format-pilcrow-arrow-left.svg';

export interface IFormatPilcrowArrowLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatPilcrowArrowLeftIcon: FC<IFormatPilcrowArrowLeftIconProps> = memo(props => {
  return <FormatPilcrowArrowLeftSvg {...props} />;
});
