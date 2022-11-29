import React, { FC, memo } from 'react';
import ScrewFlatTopSvg from '../svg/screw-flat-top.svg';

export interface IScrewFlatTopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScrewFlatTopIcon: FC<IScrewFlatTopIconProps> = memo(props => {
  return <ScrewFlatTopSvg {...props} />;
});
