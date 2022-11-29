import React, { FC, memo } from 'react';
import BorderNoneSvg from '../svg/border-none.svg';

export interface IBorderNoneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BorderNoneIcon: FC<IBorderNoneIconProps> = memo(props => {
  return <BorderNoneSvg {...props} />;
});
