import React, { FC, memo } from 'react';
import SinaWeiboSvg from '../svg/sina-weibo.svg';

export interface ISinaWeiboIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SinaWeiboIcon: FC<ISinaWeiboIconProps> = memo(props => {
  return <SinaWeiboSvg {...props} />;
});
