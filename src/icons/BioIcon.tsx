import React, { FC, memo } from 'react';
import BioSvg from '../svg/bio.svg';

export interface IBioIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BioIcon: FC<IBioIconProps> = memo(props => {
  return <BioSvg {...props} />;
});
