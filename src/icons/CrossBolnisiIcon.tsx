import React, { FC, memo } from 'react';
import CrossBolnisiSvg from '../svg/cross-bolnisi.svg';

export interface ICrossBolnisiIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CrossBolnisiIcon: FC<ICrossBolnisiIconProps> = memo(props => {
  return <CrossBolnisiSvg {...props} />;
});
