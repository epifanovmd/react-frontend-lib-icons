import React, { FC, memo } from 'react';
import KoalaSvg from '../svg/koala.svg';

export interface IKoalaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KoalaIcon: FC<IKoalaIconProps> = memo(props => {
  return <KoalaSvg {...props} />;
});
