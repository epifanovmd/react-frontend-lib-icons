import React, { FC, memo } from 'react';
import WavesArrowRightSvg from '../svg/waves-arrow-right.svg';

export interface IWavesArrowRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WavesArrowRightIcon: FC<IWavesArrowRightIconProps> = memo(props => {
  return <WavesArrowRightSvg {...props} />;
});
