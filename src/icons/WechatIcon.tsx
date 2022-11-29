import React, { FC, memo } from 'react';
import WechatSvg from '../svg/wechat.svg';

export interface IWechatIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WechatIcon: FC<IWechatIconProps> = memo(props => {
  return <WechatSvg {...props} />;
});
