import React, { FC, memo } from 'react';
import EarbudsOffOutlineSvg from '../svg/earbuds-off-outline.svg';

export interface IEarbudsOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EarbudsOffOutlineIcon: FC<IEarbudsOffOutlineIconProps> = memo(props => {
  return <EarbudsOffOutlineSvg {...props} />;
});
