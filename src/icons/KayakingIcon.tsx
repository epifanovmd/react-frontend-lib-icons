import React, { FC, memo } from 'react';
import KayakingSvg from '../svg/kayaking.svg';

export interface IKayakingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KayakingIcon: FC<IKayakingIconProps> = memo(props => {
  return <KayakingSvg {...props} />;
});
