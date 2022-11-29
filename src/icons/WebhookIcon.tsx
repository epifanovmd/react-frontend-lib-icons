import React, { FC, memo } from 'react';
import WebhookSvg from '../svg/webhook.svg';

export interface IWebhookIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WebhookIcon: FC<IWebhookIconProps> = memo(props => {
  return <WebhookSvg {...props} />;
});
