import React, { FC, memo } from 'react';
import CoffinSvg from '../svg/coffin.svg';

export interface ICoffinIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CoffinIcon: FC<ICoffinIconProps> = memo(props => {
  return <CoffinSvg {...props} />;
});
