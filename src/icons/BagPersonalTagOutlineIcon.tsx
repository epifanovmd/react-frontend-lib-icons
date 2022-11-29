import React, { FC, memo } from 'react';
import BagPersonalTagOutlineSvg from '../svg/bag-personal-tag-outline.svg';

export interface IBagPersonalTagOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BagPersonalTagOutlineIcon: FC<IBagPersonalTagOutlineIconProps> = memo(props => {
  return <BagPersonalTagOutlineSvg {...props} />;
});
