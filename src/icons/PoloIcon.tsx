import React, { FC, memo } from 'react';
import PoloSvg from '../svg/polo.svg';

export interface IPoloIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PoloIcon: FC<IPoloIconProps> = memo(props => {
  return <PoloSvg {...props} />;
});
