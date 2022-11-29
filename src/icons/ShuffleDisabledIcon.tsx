import React, { FC, memo } from 'react';
import ShuffleDisabledSvg from '../svg/shuffle-disabled.svg';

export interface IShuffleDisabledIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShuffleDisabledIcon: FC<IShuffleDisabledIconProps> = memo(props => {
  return <ShuffleDisabledSvg {...props} />;
});
