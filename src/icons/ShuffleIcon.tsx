import React, { FC, memo } from 'react';
import ShuffleSvg from '../svg/shuffle.svg';

export interface IShuffleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShuffleIcon: FC<IShuffleIconProps> = memo(props => {
  return <ShuffleSvg {...props} />;
});
