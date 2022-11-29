import React, { FC, memo } from 'react';
import FormatPilcrowArrowRightSvg from '../svg/format-pilcrow-arrow-right.svg';

export interface IFormatPilcrowArrowRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatPilcrowArrowRightIcon: FC<IFormatPilcrowArrowRightIconProps> = memo(props => {
  return <FormatPilcrowArrowRightSvg {...props} />;
});
