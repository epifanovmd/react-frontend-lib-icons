import React, { FC, memo } from 'react';
import EarbudsOutlineSvg from '../svg/earbuds-outline.svg';

export interface IEarbudsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EarbudsOutlineIcon: FC<IEarbudsOutlineIconProps> = memo(props => {
  return <EarbudsOutlineSvg {...props} />;
});
