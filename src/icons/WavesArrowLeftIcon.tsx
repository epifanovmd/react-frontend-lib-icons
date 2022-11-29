import React, { FC, memo } from 'react';
import WavesArrowLeftSvg from '../svg/waves-arrow-left.svg';

export interface IWavesArrowLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WavesArrowLeftIcon: FC<IWavesArrowLeftIconProps> = memo(props => {
  return <WavesArrowLeftSvg {...props} />;
});
