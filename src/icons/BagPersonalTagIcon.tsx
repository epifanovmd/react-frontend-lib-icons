import React, { FC, memo } from 'react';
import BagPersonalTagSvg from '../svg/bag-personal-tag.svg';

export interface IBagPersonalTagIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BagPersonalTagIcon: FC<IBagPersonalTagIconProps> = memo(props => {
  return <BagPersonalTagSvg {...props} />;
});
