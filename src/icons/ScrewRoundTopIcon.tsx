import React, { FC, memo } from 'react';
import ScrewRoundTopSvg from '../svg/screw-round-top.svg';

export interface IScrewRoundTopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScrewRoundTopIcon: FC<IScrewRoundTopIconProps> = memo(props => {
  return <ScrewRoundTopSvg {...props} />;
});
