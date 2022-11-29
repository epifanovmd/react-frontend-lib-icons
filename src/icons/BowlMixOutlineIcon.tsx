import React, { FC, memo } from 'react';
import BowlMixOutlineSvg from '../svg/bowl-mix-outline.svg';

export interface IBowlMixOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BowlMixOutlineIcon: FC<IBowlMixOutlineIconProps> = memo(props => {
  return <BowlMixOutlineSvg {...props} />;
});
