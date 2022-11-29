import React, { FC, memo } from 'react';
import GasBurnerSvg from '../svg/gas-burner.svg';

export interface IGasBurnerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GasBurnerIcon: FC<IGasBurnerIconProps> = memo(props => {
  return <GasBurnerSvg {...props} />;
});
