import React, { FC, memo } from 'react';
import RelationZeroOrManyToZeroOrManySvg from '../svg/relation-zero-or-many-to-zero-or-many.svg';

export interface IRelationZeroOrManyToZeroOrManyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationZeroOrManyToZeroOrManyIcon: FC<IRelationZeroOrManyToZeroOrManyIconProps> = memo(props => {
  return <RelationZeroOrManyToZeroOrManySvg {...props} />;
});
