import React, { FC, memo } from 'react';
import KarateSvg from '../svg/karate.svg';

export interface IKarateIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KarateIcon: FC<IKarateIconProps> = memo(props => {
  return <KarateSvg {...props} />;
});
