import React, { FC, memo } from 'react';
import RelationZeroOrManyToManySvg from '../svg/relation-zero-or-many-to-many.svg';

export interface IRelationZeroOrManyToManyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationZeroOrManyToManyIcon: FC<IRelationZeroOrManyToManyIconProps> = memo(props => {
  return <RelationZeroOrManyToManySvg {...props} />;
});
