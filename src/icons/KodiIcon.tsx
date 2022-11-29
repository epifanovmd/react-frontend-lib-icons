import React, { FC, memo } from 'react';
import KodiSvg from '../svg/kodi.svg';

export interface IKodiIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KodiIcon: FC<IKodiIconProps> = memo(props => {
  return <KodiSvg {...props} />;
});
