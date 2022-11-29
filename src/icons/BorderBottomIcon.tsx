import React, { FC, memo } from 'react';
import BorderBottomSvg from '../svg/border-bottom.svg';

export interface IBorderBottomIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BorderBottomIcon: FC<IBorderBottomIconProps> = memo(props => {
  return <BorderBottomSvg {...props} />;
});
